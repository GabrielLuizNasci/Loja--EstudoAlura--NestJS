/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository{
    private usuarios = [];

    async salvar(usuario){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

    async buscarPorEmail(email: string){
        const checkUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return checkUsuario !== undefined;
    }
}