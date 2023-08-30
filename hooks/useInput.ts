import { ChangeEvent, useState } from 'react';

interface IInputReturn {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue: string = ''): IInputReturn => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return { value, onChange };
};
