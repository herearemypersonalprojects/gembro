package info.lequocanh.gembro.domain.good;

/**
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
public enum TypeProperty {
    /**
     * Maison individuelle
     */
    MAISON_INDIVIDUELLE,
    /**
     * Appartement
     */
    APPARTEMENT,

    /**
     * Appartement meublé
     */
    APPARTEMENT_MEUBLE,
    /**
     * Local professionnel
     */
    LOCAL_PROFESSIONNEL,
    /**
     * Commerce
     */
    COMMERCE,
    /**
     * Bureaux
     */
    BUREAUX,
    /**
     * Chambre meublée
     */
    CHAMBRE_MEUBLEE,
    /**
     * Entrepot
     */
    ENTREPOT,
    /**
     * Garage:Box
     */
    GARAGE_BOX,
    /**
     * Parking
     */
    PARKING,
    /**
     * Terrain
     */
    TERRAIN,
    /**
     * Caravanne
     */
    CARAVANNE,
    /**
     * Mobil-Home
     */
    MOBIL_HOME,
    /**
     * Chalet
     */
    CHALET,
    /**
     * Atelier
     */
    ATELIER,
    /**
     * le type de bien n'est pas déterminé
     */
    INDETERMINE,
    /**
     * Appartement RC + PNO
     */
    APPARTEMENT_RC_PLUS_PNO,
    /**
     * Maison Individuelle RC Seule -TypeProduit mise à null car ce type de bien n'est pas utilisé pour le moment
     */
    MAISON_INDIVIDUELLE_RC_SEULE,
    /**
     * Maison Individuelle RC + PNO
     */
    MAISON_INDIVIDUELLE_RC_PLUS_PNO,
    /**
     * Bureaux RC + PNO de surface inférieure à 200m²
     */
    BUREAUX_SURFACE_INFERIEURE_A_200_METRE_CARRE,
    /**
     * Bureaux RC + PNO de surface comprise entre 200m² et 600m²
     */
    BUREAUX_SURFACE_ENTRE_200_METRE_CARRE_ET_600_METRE_CARRE;

}
