import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useState, useEffect } from 'react';

type Props = {
    heading: string;
};

const Subheading: FC<Props> = (props): ReactElement => {

    const { heading } = props;
    const [headings, setHeadings] = useState<string[]>([]);

    useEffect(() => {
        if (heading.includes(" ")) {
            setHeadings(heading.split(" "));
        }
    }, [heading]);

  return (
    <Box
        alignItems='center'
        sx={{
            display: 'flex',
        }}
    >
        <Box
            position='absolute'
            left='20px'
            sx={{
              height: '30px',
              width: '3px',
              backgroundColor: 'red',
            }}/>
            {headings.length > 0 ? (
                <>
                    <Typography
                        position='absolute'
                        left='40px'
                        variant='h4'
                        sx={{
                            color: 'white',
                            fontFamily: 'Nasalization',
                        }}
                    >
                        {headings[0]}
                    </Typography>
                    <Typography
                        position='absolute'
                        left='180px'
                        variant='h4'
                        sx={{
                            color: 'white',
                            fontFamily: 'Nasalization',
                            fontWeight: 'bold',
                        }}
                    >
                        {headings[1]}
                    </Typography>
                </>
            ) : (
                <Typography
                    position='absolute'
                    left='40px'
                    variant='h4'
                    sx={{
                        color: 'white',
                        fontFamily: 'Nasalization',
                        fontWeight: 'bold',
                    }}
                >
                    {heading}
                </Typography>
            )}
    </Box>
  );
}

export default Subheading