import React, { Children } from 'react';
import MyLink from '../link/MyLink';

const MyDropdown = (props: any) => {
    return (
        <div>
            {
                <MyLink to='#'>
                    {props.options.map((option: any) => {
                        <option>{option}</option>;
                        console.log(
                            '🚀 ~ file: MyDropdown.tsx ~ line 12 ~ MyDropdown ~ option.name',
                            option
                        );
                    })}
                </MyLink>
            }
        </div>
    );
};
export default MyDropdown;
