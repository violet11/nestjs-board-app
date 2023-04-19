import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get('/')
    getAllBoards(): Promise<Board[]> {
        return this.boardsService.getAllBoards();
    }

    // @Get('/')
    // getAllBoards(): Board[] {
    //     return this.boardsService.getAllBoards();
    // }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto,
        @GetUser() user: User
    ): Promise<Board> {
        return this.boardsService.createBoard(createBoardDto, user);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto): Board {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    @Get('/:id')
    getBoardById(@Param('id') id: number, @GetUser() user: User): Promise<Board> {
        return this.boardsService.getBoardById(id, user);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: number, @GetUser() user: User): Promise<void> {
        return this.boardsService.deleteBoard(id, user);
    }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
        @GetUser() user: User
    ): Promise<Board> {
        return this.boardsService.updateBoardStatus(id, status, user);
    }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ) {
    //     return this.boardsService.updateBoardStatus(id, status);
    // }
}
