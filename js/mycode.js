$(document).ready(function () {

    let correct_answers = 0;

    $("[name=question_1]").click(function () {

        $(this).change(function () {
            $("[name=question_1]").attr("disabled", true);
        });

        let right_or_wrong = Number($(this).val());
        if (right_or_wrong === 1) {
            $(this).parent().addClass("correct");
            correct_answers++;
        }
        else {
            $(this).parent().addClass("incorrect");
        }

        $(this).parent().parent().next().removeClass("hidden");
        $("#result").html("Your result is " + correct_answers + "/4 right.");
    });


    $("[name=question_2]").click(function () {
        $(this).change(function () {
            $("[name=question_2]").attr("disabled", true);
        });

        let right_or_wrong = Number($(this).val());
        if (right_or_wrong === 1) {
            $(this).parent().addClass("correct");
            correct_answers++;
        }
        else {
            $(this).parent().addClass("incorrect");
        }

        $(this).parent().parent().next().removeClass("hidden");
        $("#result").html("Your result is " + correct_answers + "/4 right.");
    });


    $("[name=question_3]").click(function () {
        $(this).change(function () {
            $("[name=question_3]").attr("disabled", true);
        });

        let right_or_wrong = Number($(this).val());
        if (right_or_wrong === 1) {
            $(this).parent().addClass("correct");
            correct_answers++;
        }
        else {
            $(this).parent().addClass("incorrect");
        }

        $(this).parent().parent().next().removeClass("hidden");
        $("#result").html("Your result is " + correct_answers + "/4 right.");
    });


    $("[name=question_4]").click(function () {
        $(this).change(function () {
            $("[name=question_4]").attr("disabled", true);
        });

        let right_or_wrong = Number($(this).val());
        if (right_or_wrong === 1) {
            $(this).parent().addClass("correct");
            correct_answers++;
        }
        else {
            $(this).parent().addClass("incorrect");
        }

        $(this).parent().parent().next().removeClass("hidden");
        $("#result").html("Your result is " + correct_answers + "/4 right.");
    });

    /**
     * Calculates the body mass index.
     * @param {number} height   height in cm
     * @param {number} weight   weight in kg
     * @returns {number}        body mass index
     */

    function getBmi(height, weight) {
        let bmi = weight / Math.pow(height / 100, 2.5) * 1.3;
        return bmi.toFixed(1);
    }

    /**
     * Calculates upper and lower bounds for the normal weight.
     * @param {Number} value   Person's height in cm.
     * @param {Number} factor  18.5 >> lower bound, 24.9 >> upper bound
     * @returns {Number}      Normal weight bound as integer.
     */

    function getWeightLimits(value, factor) {
        let limit = (factor / 1.3) * Math.pow(value / 100, 2.5);
        limit = limit.toFixed(0);
        return limit;
    }

    $("#button1").click(function () {
        let weight = Number($("#weight").val());
        let height = Number($("#height").val());
        let bmi = getBmi(height, weight);
        $("#your_bmi").html(bmi);

        if (bmi < 17) {
            $("#exp1").addClass("explanation");
        }
        else if (bmi < 18.5) {
            $("#exp2").addClass("explanation");
        }
        else if (bmi < 25) {
            $("#exp3").addClass("explanation");
        }
        else if (bmi < 30) {
            $("#exp4").addClass("explanation");
        }
        else if (bmi < 35) {
            $("#exp5").addClass("explanation");
        }
        else {
            $("#exp6").addClass("explanation");
        }

        let isChecked = $("#checkBox").prop("checked");
        if (isChecked === true) {
            let value = Number($("#height").val());
            let lower_factor = getWeightLimits(value, 18.5);
            let upper_factor = getWeightLimits(value, 24.9);

            $("#normal_weight").html(lower_factor + " - " + upper_factor);
        }

        $(".form-control").focusin(function () {
            $("#your_bmi").html("");
        });

        let valid = validateInput();
        if (valid === false) {
            $("#m_title").html("Missing input");
            $("#m_body").html("You need to write all input data.");
            $("#error_message").modal("show");
            $("#your_bmi").html("");
        }
        else {
            let today = new Date();
            let current_year = today.getFullYear();
            let birth_year = Number($("#birth_year").val());
            let age = current_year - birth_year; 

            if (age < 20 || age > 60) {
                $("#m_title").html("Note the age");
                $("#m_body").html("BMI results are for person aged 20 - 60.");
                $("#error_message").modal("show");
            }
        }
    });

/**
     * Check that all input data is written. Shows the error message.
     * @returns {Boolean} true >> ok, false >> not ok.
     */

    function validateInput() {
        let birth_year = Number($("#birth_year").val());
        let weight = Number($("#weight").val());
        let height = Number($("#height").val());

        if (birth_year === 0 || weight === 0 || height === 0) {
            return false;
        }
        else {
            return true;
        }
    }

    $("#button3").click(function () {
        let waist = Number($("#waist").val());
        let sex = $("[name=gender]:checked").val();

        if (sex === "male") {
            if (waist < 90) {
                $("#item1").addClass("explanation");
            }
            else if (waist < 100) {
                $("#item2").addClass("explanation");
            }
            else {
                $("#item3").addClass("explanation");
            }
        }
        else {
            if (waist < 80) {
                $("#item1").addClass("explanation");
            }
            else if (waist < 90) {
                $("#item2").addClass("explanation");
            }
            else {
                $("#item3").addClass("explanation");
            }
        }
    });


    $(".form-control").focusin(function () {
        $(this).select();
        $(".list-group").children().removeClass("explanation");
    });


    $("[name=gender]").click(function () {
        $(".list-group").children().removeClass("explanation");
    });


    $("[data-toggle=popover]").popover();

    

});

