/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProdutoRepository } from "./usuario.repository";
import { ProdutoController } from "./produto.controller";

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoRepository]
})
export class ProdutoModule {}
