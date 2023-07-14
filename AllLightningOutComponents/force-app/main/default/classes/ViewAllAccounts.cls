public with sharing class ViewAllAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
      return [SELECT Id, Name FROM Account];
    }
}