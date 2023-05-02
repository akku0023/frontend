import React, { FC, ReactElement, ReactNode } from 'react';

type Props = {
    image: string;
    children?: ReactNode;
};

const BackgroundImage: FC<Props> = (props:Props): ReactElement => {

    return (
        <div style={{ backgroundImage:`url(${props.image})`, height:668, width:1299, }}>
            {props.children}
        </div>
    );
}
export default BackgroundImage;