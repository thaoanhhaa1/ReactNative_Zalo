import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ScreenItem from '../../components/screenItem';
import TextCustomize from '../../components/text';

import styles from './styles';
import Wrapper from '../../components/wrapper';

const screens = [
    {
        name: 'First Screen',
        title: 'First Screen',
    },
    {
        name: '1_a',
        title: '1_a Screen',
    },
    {
        name: '1_b',
        title: '1_b Screen',
    },
    {
        name: '1_c',
        title: '1_c Screen',
    },
    {
        name: '1_d',
        title: '1_d Screen',
    },
    {
        name: '1_e',
        title: '1_e Screen',
    },
    {
        name: '2_a',
        title: '2_a Screen',
    },
    {
        name: 'XMEye',
        title: 'XMEye Screen',
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <Wrapper
            styleScrollView={styles.scrollView}
            styleSafeAreaView={styles.safeAreaView}
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <TextCustomize style={[styles.title]}>Lab 03</TextCustomize>
            <View style={[styles.screenList]}>
                {screens.map((screen, index) => (
                    <ScreenItem
                        key={index}
                        navigation={navigation}
                        navigateName={screen.name}
                    >
                        {screen.title}
                    </ScreenItem>
                ))}
            </View>
        </Wrapper>
    );
};

export default HomeScreen;
