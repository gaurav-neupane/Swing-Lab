import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import CustomTabs from '@/components/CustomTab'



const _layout = () => {
    return (
        <Tabs tabBar={(props) => <CustomTabs {...props} />} screenOptions={{headerShown: false}}>
       <Tabs.Screen name='home'/>     
       <Tabs.Screen name='session' />     
       <Tabs.Screen name='analytics'/>     
       <Tabs.Screen name='profile'/>     
    </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})