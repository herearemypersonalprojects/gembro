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
    MAISON_INDIVIDUELLE("Maison individuelle"),
    /**
     * Appartement
     */
    APPARTEMENT("Appartement"),

    /**
     * Appartement meublé
     */
    APPARTEMENT_MEUBLE("Appartement meublé"),
    /**
     * Local professionnel
     */
    LOCAL_PROFESSIONNEL("Local professionnel"),
    /**
     * Commerce
     */
    COMMERCE("Commerce"),
    /**
     * Bureaux
     */
    BUREAUX("Bureaux"),
    /**
     * Chambre meublée
     */
    CHAMBRE_MEUBLEE("Chambre meublée"),
    /**
     * Entrepot
     */
    ENTREPOT("Entrepot"),
    /**
     * Garage:Box
     */
    GARAGE_BOX("Garage:Box"),
    /**
     * Parking
     */
    PARKING("Parking"),
    /**
     * Terrain
     */
    TERRAIN("Terrain"),
    /**
     * Caravanne
     */
    CARAVANNE("Caravanne"),
    /**
     * Mobil-Home
     */
    MOBIL_HOME("Mobil-Home"),
    /**
     * Chalet
     */
    CHALET("Chalet"),
    /**
     * Atelier
     */
    ATELIER("Atelier"),
    /**
     * le type de bien n'est pas déterminé
     */
    INDETERMINE("Indéterminé"),
    /**
     * Appartement RC + PNO
     */
    APPARTEMENT_RC_PLUS_PNO("Appartement"),
    /**
     * Maison Individuelle RC Seule -TypeProduit mise à null car ce type de bien n'est pas utilisé pour le moment
     */
    MAISON_INDIVIDUELLE_RC_SEULE("Maison Individuelle RC Seule"),
    /**
     * Maison Individuelle RC + PNO
     */
    MAISON_INDIVIDUELLE_RC_PLUS_PNO("Maison Individuelle"),
    /**
     * Bureaux RC + PNO de surface inférieure à 200m²
     */
    BUREAUX_SURFACE_INFERIEURE_A_200_METRE_CARRE("Bureaux de surface inférieure à 200m²"),
    /**
     * Bureaux RC + PNO de surface comprise entre 200m² et 600m²
     */
    BUREAUX_SURFACE_ENTRE_200_METRE_CARRE_ET_600_METRE_CARRE("Bureaux de surface comprise entre 200m² et 600m²");
    ;

    private final String title;

    private TypeProperty(String title) {
        this.title = title;
    }
}
