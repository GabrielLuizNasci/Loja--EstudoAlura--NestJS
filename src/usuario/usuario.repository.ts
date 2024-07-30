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
        const usuario = this.buscarPorId(id)

        Object.entries(dadosAtuali).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }

            usuario[chave] = valor;
        })

        return usuario;
    }

    async deletar(id: string){
        const usuario = this.buscarPorId(id)

        this.usuarios = this.usuarios.filter(usuarioSalvo => usuarioSalvo.id !== id);

        return usuario;
    }

    private buscarPorId(id: string){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario){
            throw new Error('Usuario não encontrado.');
        }

        return possivelUsuario;
    }

    async buscarPorEmail(email: string){
        const checkUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return checkUsuario !== undefined;
    }
}