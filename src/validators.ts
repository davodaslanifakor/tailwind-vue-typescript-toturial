interface Rule {
    type: 'require' | 'length'
}

interface MinMaxOptions {
    min: number,
    max: number
}
interface Require extends Rule {
    type: 'require'
}
interface Length extends Rule {
    type: 'length',
    options: MinMaxOptions
}


export function require(): Require{
    return {
        type: 'require'
    }
}

export function length(options: MinMaxOptions): Length{
    return {
        type: 'length',
        options
    }
}

type Validator = Require | Length

export interface Status {
    valid: boolean,
    message?: string
}

export function validate(value: string, validators: Validator[]):Status {
    for (const validator of validators) {
        if(validator.type === 'require' && (!value || !value.length)){
            return {
                valid: false,
                message: 'this filed is required'
            }
        }
        if(validator.type === 'length' && (value.length < validator.options.min || value.length > validator.options.max )){
            return {
                valid: false,
                message: `this min ${validator.options.min} & this is max ${validator.options.max}`
            }
        }
    }
    return  {
        valid: true
    }
}