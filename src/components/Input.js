import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme })=> ({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
    const width = Dimensions.get('window').width;

    return (
        <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxlength={50} 
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done" // 완료 버튼을 done으로
        keyboardAppearance="dark" //키보드 배경을 어둡게

        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;