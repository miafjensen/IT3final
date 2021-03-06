package rest;
import javax.ws.rs.WebApplicationException;

public class LoginController {
    private static BrugerDAO brugerDAO = new BrugerDAO();

    public String validerBruger(Bruger bruger) {
        Bruger user = brugerDAO.findBruger(bruger.getBrugernavn());
        if (user !=null && user.getPassword().equals(user.getPassword())) {
            return JWTHandler.generateToken(user.getBrugernavn());
        }
        throw new WebApplicationException("FYFY",401);
    }
}