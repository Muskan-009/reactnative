import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
const checkbox = () => {
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
        <View>


            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                // tintColors={{ true: '#007AFF', false: '#aaa' }}
                label="asdd"
            />
            <Pressable onPress={() => setChecked(!checked)} style={styles.checkboxContainer}>
                <View style={[styles.checkbox, checked && styles.checked]}>
                    {checked && <Text style={styles.checkmark}>✅</Text>}
                </View>
                <Text style={styles.label}>Subscribe to newsletter</Text>
            </Pressable>
        </View> 
    )
}
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#333',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#007AFF',
    },
    checkmark: {
        color: '#fff',
        fontSize: 16,
    },
    label: {
        fontSize: 16,
    },
});
export default checkbox