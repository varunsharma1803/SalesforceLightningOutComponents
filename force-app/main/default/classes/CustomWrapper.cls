public class CustomWrapper {

    @AuraEnabled
    public String firstName { get; set; }
    @AuraEnabled
    public String LastName {get; set; }
    @AuraEnabled
    public String company { get; set; }
    @AuraEnabled
    public String email { get; set; }
    @AuraEnabled
    public String description { get; set; }
    @AuraEnabled
    public String reason { get; set; }
    @AuraEnabled
    public Boolean consent { get; set; }


}