import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../images/landing.png'
import studyIcon from '../../images/icons/study.png'
import giveClasses from '../../images/icons/give-classes.png'
import heartIcon from '../../images/icons/heart.png'

function Landing () {
    const navigation = useNavigation()

    function handleNavigateToGiveClassesPage () {
        navigation.navigate('GiveClasses')
    }

    function handleNavigateToStudyPages () {
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer? {'\n'}</Text>
            </Text>
            
            <View style={styles.buttonsContainer}>

                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyPages}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToGiveClassesPage}>
                    <Image source={giveClasses} />

                    <Text style={styles.buttonText} >Dar aulas</Text>
                </RectButton>

            </View>

            <Text style={styles.totalConnections}>
                Total de X conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    )
}

export default Landing