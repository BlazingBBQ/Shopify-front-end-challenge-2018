// Externalized Strings
var externalizedStrings = {
    headerTitle: "Stay up to date with ecommerce trends with Shopify's newsletter",
    formSubheader: "Subscribe for free marketing tips",
    emailPlaceholder: "Email Address",
    interestPlaceholder: "Interested in...",
    invalidEmailWarning: "Please enter a valid email address",
    signUpButtonText: "Sign up now",
    submittingButtonText: "Submitting...",
    thanksSubheader: "Thanks for subscribing",
    thanksContent: "You'll start receiving free tips and resources soon.",
    interests: [
        { name: "Marketing", value: "marketing" },
        { name: "Design", value: "design" },
        { name: "Business", value: "business" },
        { name: "Technology", value: "technology" }
    ]
};
/*
    Email regular expression
    [ ] represent optional characters
    Format: *[.*]@*[-*].*[-*]
    First portion: Special characters are allowed. Can include periods but not as first or last character.
    Second and Third portion: Special characters are not allowed. Can include dashes but not as first or last character.
*/
var emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?/i;
var myApp = angular.module("myApp", []);
myApp.controller("ctrl", function ($scope) {
    $scope.strings = externalizedStrings;
    $scope.formData = {
        emailInput: "",
        invalidEmail: false,
        interestField: undefined,
        submitting: false,
        completed: false
    };
    $scope.submit = function () {
        if (!$scope.formData.submitting) {
            var emailSubmit = $scope.formData.emailInput;
            var interestSubmit = $scope.formData.interestField;
            var validSubmit = emailPattern.test(emailSubmit);
            if (validSubmit) {
                console.log("Email Field: " + emailSubmit);
                console.log("Interest Field: " + (interestSubmit ? interestSubmit : "No selection"));
                $scope.formData.invalidEmail = false;
                $scope.formData.submitting = true;
                // Simulate HTTP request
                setTimeout(function () {
                    $scope.formData.completed = true;
                    $scope.$apply();
                }, 2000);
            }
            else {
                $scope.formData.invalidEmail = true;
            }
        }
    };
});