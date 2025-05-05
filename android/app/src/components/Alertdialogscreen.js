import { View, Text } from 'react-native'
import React from 'react'
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,

} from '/components/ui/alert-dialog';
const Alertdialogscreen = () => {
  return (
    <View>
      <Text>Alertdialogscreen</Text>
      <AlertDialog>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogCloseButton />
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  )
}

export default Alertdialogscreen