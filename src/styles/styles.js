
const styles = {
  home: {
    viewStyle: {
      backgroundColor: '#F0F5F9',
      alignItems: 'center',
      elevation: 0,
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width
    },
    textStyle: {
      color: 'white',
      fontSize: 20,
    }
  },
  header: {
    viewStyle: {
      backgroundColor: '#FA848A',

      justifyContent: 'center',
      alignItems: 'center',

      height: 60,
      width: Dimensions.get("window").width,
      paddingTop: 15,

      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      color: 'white',
      fontSize: 20,
    }
  },
  lessonTitleCard: {
    viewStyle: {},
    textStyle: {}
  }
}