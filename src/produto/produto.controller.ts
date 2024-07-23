/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./usuario.repository";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosProduto){
        this.produtoRepository.salvar(dadosProduto);
        return dadosProduto;
    }

    @Get()
    async listaProduto(){
        return this.produtoRepository.listar();
    }
}