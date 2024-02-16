import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { Container } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> &{
    isSelected: Boolean
}


export const Radio = forwardRef(function Radio(
    {children, isSelected, ...otherProps}:Props, 
    ref:LegacyRef<HTMLInputElement>)
    {
        return(
            <Container data-estado={isSelected}>
                <input type="radio" ref={ref} {...otherProps}/>
                {children}
            </Container>
        )
    }
)