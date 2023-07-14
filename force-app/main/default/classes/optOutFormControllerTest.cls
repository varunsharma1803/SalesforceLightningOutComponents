@IsTest
private class optOutFormControllerTest{

    @IsTest
    private static void testOptOutForm(){

        Lead testLead = new Lead();
        testLead.LastName = 'testlast';
        testLead.FirstName = 'testfirst';
        testLead.Email = 'test@email.com';
        testLead.Company = 'testcompany';
        testLead.Website = 'testwebsite';
        testLead.Status = 'New';

        insert testLead;

        CustomWrapper wrapperInsert = new CustomWrapper();

        wrapperInsert.reason = 'Request - B';
        wrapperInsert.description = 'test';
        wrapperInsert.company = 'testcompany';
        wrapperInsert.LastName = 'lastTest';
        wrapperInsert.firstName = 'firstTest';
        wrapperInsert.email = 'email@test.com';
        wrapperInsert.consent = true;

        CustomWrapper wrapperUpdate = new CustomWrapper();

        wrapperUpdate.reason = 'Request - A';
        wrapperUpdate.description = 'testUpdate';
        wrapperUpdate.company = 'testcompanyUpdate';
        wrapperUpdate.LastName = 'lastTestUpdate';
        wrapperUpdate.firstName = 'firstTest';
        wrapperUpdate.email = 'email@test.com';
        wrapperUpdate.consent = false;

        optOutFormController.updateSObjects(wrapperInsert);
        optOutFormController.updateSObjects(wrapperUpdate);

    }

}