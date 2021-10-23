import React, { useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    align-self: flex-start;
    margin: 20px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`;

export default function App(){
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        alert(`Add : ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    const width = Dimensions.get('window').width

    return(
        <ThemeProvider theme={theme}>
            <Container>
                {/* 안드로이드에서 스테이터스 바가 가려지는 현상 및 흰색으로 색 변경 */}
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />

                <Title>
                    TODO List
                </Title>

                <Input 
                placeholder="+ Add a Task" 
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask}
                />

                <List width={width}>
                    <Task text="Hanbit" />
                    <Task text="React Native" />
                    <Task text="React Native Sample" />
                    <Task text="Edit TODO Item" />
                </List>

                <IconButton type={images.uncompleted} />
                <IconButton type={images.completed} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} />

            </Container>
        </ThemeProvider>
    );
}