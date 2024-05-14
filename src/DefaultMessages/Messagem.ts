export const Messages = {
    isNotEmpty: (campo: string) => `O campo ${campo} não pode estar vazio`,
    IsString: (campo: string) => `O campo ${campo} deve ser um texto`,
    IsNuber: (campo: string) => `O campo ${campo} deve ser um numero`,
    minLength: (campo: string, tamanho: any) =>
        `O campo ${campo} deve ter pelo menos ${tamanho[0]} caracteres`,
    maxLength: (campo: string, tamanho: any) =>
        `O campo ${campo} deve ter no máximo ${tamanho[0]} caracteres`,
    confirm_password: 'as senhas devem ser iguais',
};

