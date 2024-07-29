/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "src/usuario/dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository) {}
    
    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.id = uuid();
        
        this.usuarioRepository.salvar(usuarioEntity);

        return { 
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome, usuarioEntity.email), 
            message: 'Usuario Criado com sucesso.' 
        };
    }

    @Get()
    async listaUsuario(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );

        return usuariosLista
    }

    @Put()
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
        const usuarioAtuali = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtuali,
            message: 'Usuário atualizado com sucesso.',
        }
    }
}