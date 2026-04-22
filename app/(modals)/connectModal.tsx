import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalWrapper from '@/components/ModalWrapper'
import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Button from '@/components/Button'
import { verticalScale } from '@/utils/styling'

const connectModal = () => {
    return (
        <ModalWrapper bg={colors.primary} >
            <View style={styles.container}>
                <Header leftIcon={<BackButton />}/>
                <View style={{flex: 1, justifyContent: 'center',gap: spacingX._30}}>
                    <Typo>Connect Your Device</Typo>
                    <Button>
                        <Typo>Connect</Typo>
                    </Button>
                </View>
            </View>    
      </ModalWrapper>
    )
}

export default connectModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: spacingY._20
    }
})