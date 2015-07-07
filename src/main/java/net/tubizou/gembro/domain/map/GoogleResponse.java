package net.tubizou.gembro.domain.map;

/**
 * Created by quocanh on 07/07/15.
 */
public class GoogleResponse {
    private Result[] results ;
    private String status ;
    private String error_message;

    public Result[] getResults() {
        return results;
    }
    public void setResults(Result[] results) {
        this.results = results;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String getError_message() {
        return error_message;
    }

    public void setError_message(String error_message) {
        this.error_message = error_message;
    }
}
