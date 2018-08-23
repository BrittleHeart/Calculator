var calculator = {
    addition: document.getElementById("addition"),
    subtraction: document.getElementById("subtraction"),
    multiplying: document.getElementById("multiplying"),
    dividing: document.getElementById("dividing"),
    root: document.getElementById("root"),
    logarithm: document.getElementById("logarithm"),

    firstNum: document.getElementById("firstNum"),
    secondNum: document.getElementById("secondNum"),
    reset: document.getElementById("reset"),
    result: document.getElementById("result"),

    notifications: document.getElementById("notifications"),
    element: ["root", "logarithm"],
    form: document.getElementById("form"),

    isFilled: false,

    init: () => {
        calculator.onAddition();
        calculator.onSubtraction();
        calculator.onMultiplying();
        calculator.onDividing();
        calculator.onRoot();
        calculator.onlogarithm();
        calculator.onReset();
    },

    checkCredentials: () => {
        if (this.firstNum.value === "" || this.secondNum.value === "") {
            calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-danger");
            calculator.setNotificationContent(calculator, "innerHTML", "", "Proszę wypełnić wymagane pola!");
            return false;
        } else if (isNaN(this.firstNum.value) || isNaN(this.secondNum.value)) {
             calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-danger");
             calculator.setNotificationContent(calculator, "innerHTML", "", "Podana wartość nie jest liczbą");
             return false;
        } else {
            calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-success");
            calculator.setNotificationContent(calculator, "innerHTML", "", "Pomyślnie dokonano akcji!");
            return true;
        }
    },

    disableButtons: (calculator, element) => {
        switch (element) {
            case "addition":
                this.addition.setAttribute("disabled", "disabled");
                break;
            case "subtraction":
                this.subtraction.setAttribute("disabled", "disabled");
                break;
            case "multiplying":
                this.multiplying.setAttribute("disabled", "disabled");
                break;
            case "dividing":
                this.dividing.setAttribute("disabled", "disabled");
                break;
            default:
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Invalid buttons operation");
                break;
        }

        return element;
    },

    unDisableButtons: (calculator, element) => {
        switch (element) {
            case "addition":
                this.addition.removeAttribute("disabled");
                break;
            case "subtraction":
                this.subtraction.removeAttribute("disabled");
                break;
            case "multiplying":
                this.multiplying.removeAttribute("disabled");
                break;
            case "dividing":
                this.dividing.removeAttribute("disabled");
                break;
            default:
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Invalid buttons operation");
                break;
        }

        return element;
    },

    checkIfSecondNumberIsNotZero: () => {
        if (parseInt(this.secondNum.value) !== 0)
            return true;
        else
            return false;
    },

    checkIfFieldIsFilled: () => {
        if (this.firstNum.onblur = () => {
            if (this.firstNum.value === "")         this.isFilled = false;
            else                                    this.isFilled = true;

            if (this.secondNum.onblur = () => {
                if (this.secondNum.value === "")    this.isFilled = false;
                else                                this.isFilled = true;
            });

            if (this.isFilled === false) {
                calculator.setNotificationContent(calculator, "setAttribue", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Prosimy o wypełnienie wszystkich pól przed dokonaniem akcji");

                calculator.disableButtons(calculator, "addition");
                calculator.disableButtons(calculator, "subtraction");
                calculator.disableButtons(calculator, "multiplying");
                calculator.disableButtons(calculator, "dividing");

            } else {
                calculator.setNotificationContent(calculator, "removeAttribute", "class", "");
                calculator.setNotificationContent(calculator, "innerHTML", "", "");

                calculator.unDisableButtons(calculator, "addition");
                calculator.unDisableButtons(calculator, "subtraction");
                calculator.unDisableButtons(calculator, "multiplying");
                calculator.unDisableButtons(calculator, "dividing");

            }
        });

        return this.isFilled;
    },

    checkRootAndAlghorytmCredencials: () => {
        if (this.firstNum.value !== "" && !isNaN(this.firstNum.value))
        {
            calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-success");
            calculator.setNotificationContent(calculator, "innerHTML", "", "Pomyślnie dokonano akcji");

            this.secondNum.setAttribute("disabled", "disabled");

            if (parseInt(this.firstNum.value) <= 0) {
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Logarytm oraz pierwiastek z liczby: " + this.firstNum.value + " musi być > 0");

                this.result.value = "Wynik wynosi ..";
                return false;
            }

            return true;
        } else {
            calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-danger");
            calculator.setNotificationContent(calculator, "innerHTML", "", "Coś poszło nie tak!");

            return false;
        }
    },

    setNotificationContent: (calculator, attribute, attributeName = "", content) => {
        switch (attribute) {
            case "setAttribute":
                this.notifications.setAttribute(attributeName, content);
                break;
            case "innerHTML":
                this.notifications.innerHTML = content;
                break;
            case "removeAttribute":
                this.notifications.removeAttribute(attributeName);
                break;
            default:
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Coś poszło nie tak");
                break;
        }

        return content;
    },

    tooltipGenerator(calculator, element) {
        for (let i = 0; i <= this.element.length; i++){
            this.element[i] = element;

            if (this.element[i] === "root")
                return $(this.root).tooltip();
            else if (this.element[i + 1] === "logarithm")
                return $(this.logarithm).tooltip();
            else {
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Invalid operation");
                return false;
            }
        }
    },

    onAddition: () => {
            if (this.addition.onclick = () => {
                if (calculator.checkCredentials())
                    return this.result.value = parseInt(this.firstNum.value) + parseInt(this.secondNum.value);
                else return false;
            });
    },

    onSubtraction: () => {
        if (this.subtraction.onclick = () => {
            if (calculator.checkCredentials() === true)
                return this.result.value = parseInt(this.firstNum.value) - parseInt(this.secondNum.value);
            else return false;
        });
    },

    onMultiplying: () => {
        if (this.multiplying.onclick = () => {
            if (calculator.checkCredentials() === true)
                return this.result.value = parseInt(this.firstNum.value) * parseInt(this.secondNum.value);
            else return false;
        });
    },

    onDividing: () => {
        if (this.dividing.onclick = () => {
            if (calculator.checkCredentials() === true && calculator.checkIfSecondNumberIsNotZero() === true)
                return this.result.value = parseInt(this.firstNum.value) / parseInt(this.secondNum.value);
            else {
                calculator.setNotificationContent(calculator, "setAttribute", "class", "alert alert-warning");
                calculator.setNotificationContent(calculator, "innerHTML", "", "Nie dziel przez 0!");

                return this.result.value = "Wynik wynosi ..";
            }
        });
    },

    onRoot: () => {
        this.root.onmouseenter = () => {calculator.tooltipGenerator(calculator, "root")};

        if (this.root.onclick = () => {
            setTimeout(() => { this.secondNum.classList.add("hide-second-num"); }, 100);

            this.reset.classList.remove("reset");

            if (calculator.checkRootAndAlghorytmCredencials() === true) {
                this.result.value = Math.sqrt(this.firstNum.value);

                calculator.disableButtons(calculator, "addition");
                calculator.disableButtons(calculator, "subtraction");
                calculator.disableButtons(calculator, "multiplying");
                calculator.disableButtons(calculator, "dividing");

                return calculator.checkRootAndAlghorytmCredencials();
            }
            else
                return false;
        });
    },

    onlogarithm: () => {
        this.logarithm.onmouseenter = () => {calculator.tooltipGenerator(calculator, "logarithm")};

        if (this.logarithm.onclick = () => {

            setTimeout(() => { this.secondNum.classList.add("hide-second-num"); }, 100);

            this.reset.classList.remove("reset");

            if (calculator.checkRootAndAlghorytmCredencials() === true)
            {
                this.result.value = Math.log2(this.firstNum.value);

                calculator.disableButtons(calculator, "addition");
                calculator.disableButtons(calculator, "subtraction");
                calculator.disableButtons(calculator, "multiplying");
                calculator.disableButtons(calculator, "dividing");

                return calculator.checkRootAndAlghorytmCredencials();
            }
            else
                return false;
        });
    },

    onReset: () => {
        if (this.reset.onclick = () => {
            this.notifications.removeAttribute("class");
            this.notifications.innerHTML = "";

            this.secondNum.removeAttribute("disabled");
            this.secondNum.value = "";
            this.secondNum.classList.remove("hide-second-num");

            calculator.unDisableButtons(calculator, "addition");
            calculator.unDisableButtons(calculator, "subtraction");
            calculator.unDisableButtons(calculator, "multiplying");
            calculator.unDisableButtons(calculator, "dividing");

            this.firstNum.value = "";
            this.result.value = "Wynik wynosi ..";

            this.reset.classList.toggle("reset");

        });
    },
};

window.onload = () => {
    calculator.checkIfFieldIsFilled();
    calculator.init()
};