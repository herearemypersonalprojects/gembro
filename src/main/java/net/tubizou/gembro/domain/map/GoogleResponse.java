package net.tubizou.gembro.domain.map;

/**
 * Created by quocanh on 07/07/15.
 */
public class GoogleResponse {
    private Result[] results ;
    private String status ;
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
}
