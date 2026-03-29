import { Button, Image, View, StyleSheet } from "react-native";
import { pickImg } from "../utils/photoHandler";
import { useState } from "react";



export default function Page() {

    const [photos, setPhoto] = useState(null);
    const handleSelectPhoto = async () => {
        const base64String = await pickImg();
        setPhoto(base64String);
    }

    return (
        <View style={styles.container}>
            <View style={styles.pic}>
                {photos && (<Image
                    source={{ uri: photos }}
                    style={{width:350, height:250,borderRadius:15}}
                />)}
            </View>
            <View style={styles.btn}>
                <Button
                    title="選擇照片"
                    onPress={handleSelectPhoto}
                    style={{ backgroundColor: '#fff' }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: 20,
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    pic:{
        margin:40,
        width:350,
        height:250,
        backgroundColor:'#d1d1d1',
        borderRadius:15
    }
})