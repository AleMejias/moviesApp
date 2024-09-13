import { StyleSheet } from "react-native";

export const globalColors = {
  black: '#000'
}

export const globalStyles = StyleSheet.create({

  homeScreenContainer: {
    paddingTop: 20,
    paddingBottom: 30
  },
  movieWallPaperImage: {
    flex: 1,
    borderRadius: 18,
  },
  movieWallPaperImageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: globalColors.black,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7
  },
  horizontalCarouselText: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10
  },
  horizontalCarouselMarginBottom: {
    marginBottom: 5
  },
  movieHeaderImageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  movieHeaderImageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  movieHeaderPosterImage: {
    flex: 1,
    objectFit: 'fill'
  },
  headerMovieTitleContainer: {
    paddingHorizontal: 20
  },

  movieHeaderMarginContainer: {
    marginTop: 20,
  },
  movieHeaderSubTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  movieHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieHeaderBackButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  movieHeaderBackButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  movieDetailsContainer: {
    marginHorizontal: 20
  },
  movieDetailsRow: {
    flexDirection: 'row'
  },
  movieDetailsGenres: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  movieDetailsTitles: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold'
  },
  movieDetailsHistory: {
    fontSize: 16
  },
  movieDetailsBudget: {
    fontSize: 18
  },
  movieDetailsCastingContainer: {
    marginTop: 10,
    marginBottom: 50
  },
  movieDetailsCastingText: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: "bold",
    marginHorizontal: 20
  },
  actorsContainer: {
    marginRight: 10,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
    width: 100
  },
  actorInfoContainer: {
    marginLeft: 10,
    marginTop: 4
  },
  actorImage: {
    width: 100,
    height: 150,
    borderRadius: 10
  },
  actorNameText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  actorCharacterText: {
    fontSize: 12,
    opacity: 0.7
  },
  loaderContainer: {
    flex : 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerContainer: {
    display: 'flex'
  }



});