/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository{
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

    async atualizar(id: string, dadosAtuali: Partial<UsuarioEntity>){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario){
            throw new Error('Usuario não encontrado.');
        }

        Object.entries(dadosAtuali).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }

            possivelUsuario[chave] = valor;
        })
    }

    async buscarPorEmail(email: string){
        const checkUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return checkUsuario !== undefined;
    }
}