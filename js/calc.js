var variables = {
    addition: document.getElementById("addition"),
    subtraction: document.getElementById("subtraction"),
    multiplying: document.getElementById("multiplying"),
    dividing: document.getElementById("dividing"),
    root: document.getElementById("root"),
    logharytm: document.getElementById("logharytm"),

    firstNum: document.getElementById("firstNum"),
    secondNum: document.getElementById("secondNum"),
    reset: document.getElementById("reset"),
    result: document.getElementById("result"),

    notifications: document.getElementById("notifications"),
    element: ["root", "logharytm"],
    form: document.getElementById("form"),

    isFilled: false,

    checkCredentials: () => {
        if (this.firstNum.value === "" && this.secondNum.value === "") {
            variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-danger");
            variables.setNotificationContent(variables, "innerHTML", "", "Proszę wypełnić wymagane pola!");
            return false;
        } else if (isNaN(this.firstNum.value) || isNaN(this.secondNum.value)) {
             variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-danger");
             variables.setNotificationContent(variables, "innerHTML", "", "Podana wartość nie jest liczbą");
             return false;
        } else {
            variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-success");
            variables.setNotificationContent(variables, "innerHTML", "", "Pomyślnie dokonano akcji!");
            return true;
        }
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
                variables.setNotificationContent(variables, "setAttribue", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Prosimy o wypełnienie wszystkich pól przed dokonaniem akcji");

                variables.disableButtons(variables, "addition");
                variables.disableButtons(variables, "subtraction");
                variables.disableButtons(variables, "multiplying");
                variables.disableButtons(variables, "dividing");

                console.log(this.isFilled);

            } else {
                variables.setNotificationContent(variables, "removeAttribute", "class", "");
                variables.setNotificationContent(variables, "innerHTML", "", "");

                variables.unDisableButtons(variables, "addition");
                variables.unDisableButtons(variables, "subtraction");
                variables.unDisableButtons(variables, "multiplying");
                variables.unDisableButtons(variables, "dividing");

                console.log(this.isFilled);
            }
        });

        return this.isFilled;
    },

    checkRootAndAlghorytmCredencials: () => {
        if (this.firstNum.value !== "" && !isNaN(this.firstNum.value))
        {
            variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-success");
            variables.setNotificationContent(variables, "innerHTML", "", "Pomyślnie dokonano akcji");

            this.secondNum.setAttribute("disabled", "disabled");

            if (parseInt(this.firstNum.value) <= 0) {
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Logarytm oraz pierwiastek z liczby: " + this.firstNum.value + " musi być > 0");

                this.result.value = "Wynik wynosi ..";
                return false;
            }

            return true;
        } else {
            variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-danger");
            variables.setNotificationContent(variables, "innerHTML", "", "Coś poszło nie tak!");

            return false;
        }
    },

    disableButtons: (variables, element) => {
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
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Invalid buttons operation");
                break;
        }

        return element;
    },

    unDisableButtons: (variables, element) => {
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
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Invalid buttons operation");
                break;
        }

        return element;
    },

    setNotificationContent: (variables, attribute, attributeName = "", content) => {
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
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Coś poszło nie tak");
                break;
        }

        return content;
    },

    tooltipGenerator(variables, element) {
        for (let i = 0; i <= this.element.length; i++){
            this.element[i] = element;

            if (this.element[i] === "root")
                return $(this.root).tooltip();
            else if (this.element[i + 1] === "logharytm")
                return $(this.logharytm).tooltip();
            else {
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Invalid operation");
                return false;
            }
        }
    },

    onAddition: () => {
            if (this.addition.onclick = () => {
                if (variables.checkCredentials())
                    return this.result.value = parseInt(this.firstNum.value) + parseInt(this.secondNum.value);
                else return false;
            });
    },

    onSubtraction: () => {
        if (this.subtraction.onclick = () => {
            if (variables.checkCredentials() === true)
                return this.result.value = parseInt(this.firstNum.value) - parseInt(this.secondNum.value);
            else return false;
        });
    },

    onMultiplying: () => {
        if (this.multiplying.onclick = () => {
            if (variables.checkCredentials() === true)
                return this.result.value = parseInt(this.firstNum.value) * parseInt(this.secondNum.value);
            else return false;
        });
    },

    onDividing: () => {
        if (this.dividing.onclick = () => {
            if (variables.checkCredentials() === true && variables.checkIfSecondNumberIsNotZero() === true)
                return this.result.value = parseInt(this.firstNum.value) / parseInt(this.secondNum.value);
            else {
                variables.setNotificationContent(variables, "setAttribute", "class", "alert alert-warning");
                variables.setNotificationContent(variables, "innerHTML", "", "Nie dziel przez 0!");

                return this.result.value = "Wynik wynosi ..";
            }
        });
    },

    onRoot: () => {
        this.root.onmouseenter = () => {variables.tooltipGenerator(variables, "root")};

        if (this.root.onclick = () => {
            setTimeout(() => { this.secondNum.classList.add("hide-second-num"); }, 100);

            this.reset.classList.remove("reset");

            if (variables.checkRootAndAlghorytmCredencials() === true) {
                this.result.value = Math.sqrt(this.firstNum.value);

                variables.disableButtons(variables, "addition");
                variables.disableButtons(variables, "subtraction");
                variables.disableButtons(variables, "multiplying");
                variables.disableButtons(variables, "dividing");

                return variables.checkRootAndAlghorytmCredencials();
            }
            else
                return false;
        });
    },

    onLogharytm: () => {
        this.logharytm.onmouseenter = () => {variables.tooltipGenerator(variables, "logharytm")};

        if (this.logharytm.onclick = () => {

            setTimeout(() => { this.secondNum.classList.add("hide-second-num"); }, 100);

            this.reset.classList.remove("reset");

            if (variables.checkRootAndAlghorytmCredencials() === true)
            {
                this.result.value = Math.log2(this.firstNum.value);

                variables.disableButtons(variables, "addition");
                variables.disableButtons(variables, "subtraction");
                variables.disableButtons(variables, "multiplying");
                variables.disableButtons(variables, "dividing");

                return variables.checkRootAndAlghorytmCredencials();
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

            variables.unDisableButtons(variables, "addition");
            variables.unDisableButtons(variables, "subtraction");
            variables.unDisableButtons(variables, "multiplying");
            variables.unDisableButtons(variables, "dividing");

            this.firstNum.value = "";
            this.result.value = "Wynik wynosi ..";

            this.reset.classList.toggle("reset");

        });
    }
};

variables.onAddition();
variables.onSubtraction();
variables.onMultiplying();
variables.onDividing();
variables.onRoot();
variables.onLogharytm();
variables.onReset();

window.onload = () => { variables.checkIfFieldIsFilled(); };