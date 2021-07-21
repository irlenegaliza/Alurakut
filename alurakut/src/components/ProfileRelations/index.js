import styled from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`

    ul {
        display: grid;
        grid-gap: 7px;
        grid-template-columns: 1fr 1fr 1fr;
        max-height: 200px;
        list-style: none;
        margin-right: auto;
        margin-left: -38px;
    }

    img {
        object-fit: cover;
        background-position: center center;
        width: 120%;
        height: 110%;
        position: relative;
    }

    ul li a {
        display: inline-block;
        height: 102px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        span {
            color: #FFFFFF;
            font-size: 12px;
            position: absolute;
            left: 100;
            bottom: 8px;
            z-index: 3;
            padding: 0 0 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: ;
            -webkit-box-orient: vertical;
        }
    

        &:after {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-indeX: 1;
            background-image: linear-gradient(0deg, #00000073, transparent);
        }
    }

`;

