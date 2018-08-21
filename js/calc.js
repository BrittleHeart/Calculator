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

    checkCredentials: () => {
        if ((this.firstNum.value === "" || this.firstNum.value === undefined) && (this.secondNum.value === "" || this.secondNum.value === undefined)) {
            this.notifications.setAttribute("class", "alert alert-danger");
            this.notifications.innerHTML = "Proszę wypełnij wymagane dane";
            return false;
        } else if (isNaN(this.firstNum.value) && this.secondNum.value) {
            this.notifications.setAttribute("class", "alert alert-danger");
            this.notifications.innerHTML = "Podana przez Ciebie wartość nie jest liczbą!";
            return false;
        } else if (this.firstNum.onblur = () => {
            console.log("sadad");
            if (this.firstNum.value === "" || this.secondNum.value === "" ) {
                this.notifications.setAttribute("class", "alert alert-warning");
                this.notifications.innerHTML = "Prosimy o wypełnienie obu z pól, przed przystąpieniem do akcji!";
                return false;
            }
        });

        if (this.firstNum.value !== "" && this.secondNum.value !== "") {
            this.notifications.setAttribute("class", "alert alert-success");
            this.notifications.innerHTML = "Pomyślnie dokonano akcji!";
            return true;
        } else {
            this.notifications.setAttribute("class", "alert alert-danger");
            this.notifications.innerHTML = "Proszę wypełnij wymagane dane!";
            return false;
        }
    },

    checkRootAndAlghorytmCredencials: () => {
        if (this.firstNum.value !== "" && !isNaN(this.firstNum.value))
        {
            this.notifications.setAttribute("class", "alert alert-success");
            this.notifications.innerHTML = "Pomyślnie dokonano akcji!";

            this.secondNum.setAttribute("disabled", "disabled");
            this.result.value = Math.sqrt(this.firstNum.value);

            return true;
        } else {
            this.notifications.setAttribute("class", "alert alert-danger");
            this.notifications.innerHTML = "Coś poszło nie tak";

            return false;
        }

        if (this.logharytm.onclick = () => {
            if (this.firstNum.value !== "" && !isNaN(this.firstNum.value))
            {
                this.notifications.setAttribute("class", "alert alert-success alert-dismissible");
                this.notifications.innerHTML = `Pomyślnie dokonano akcji!`;

                this.secondNum.setAttribute("disabled", "disabled");
                this.result.value = Math.log2(this.firstNum.value);

                return true;
            } else {
                this.notifications.setAttribute("class", "alert alert-danger");
                this.notifications.innerHTML = "Coś poszło nie tak";

                return false;
            }
        });
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

    onOividing: () => {
        if (this.dividing.onclick = () => {
            if (variables.checkCredentials() === true)
                return this.result.value = parseInt(this.firstNum.value) / parseInt(this.secondNum.value);
            else return false;
        });
    },

    tooltipGenerator(variables, element) {
      for (let i = 0; i <= this.element.length; i++){
          this.element[i] = element;

          if (this.element[i] === "root")
              return $(this.root).tooltip();
          else if (this.element[i + 1] === "logharytm")
              return $(this.logharytm).tooltip();
          else {
              this.notifications.setAttribute("class", "alert alert-warning");
              this.notifications.innerHTML = "Invalid operation";
              return false;
          }
      }
    },

    onRoot: () => {
        this.root.onmouseenter = () => {variables.tooltipGenerator(variables, "root")};

        if (this.root.onclick = () => {
            setTimeout(() => { this.secondNum.classList.toggle("hide-second-num"); }, 100);

            this.reset.classList.toggle("reset");

            if (variables.checkRootAndAlghorytmCredencials() === true)
                return variables.checkRootAndAlghorytmCredencials();
            else
                return false;
        });
    },

    onLogharytm: () => {
        this.logharytm.onmouseenter = () => {variables.tooltipGenerator(variables, "logharytm")};

        if (this.logharytm.onclick = () => {

            setTimeout(() => { this.secondNum.classList.toggle("hide-second-num"); }, 100);

            this.reset.classList.toggle("reset");

            if (variables.checkRootAndAlghorytmCredencials() === true)
                return variables.checkRootAndAlghorytmCredencials();
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
            this.secondNum.classList.toggle("hide-second-num");

            this.firstNum.value = "";
            this.result.value = "Wynik wynosi ..";

            this.reset.classList.toggle("reset");
        });
    }
};

variables.onAddition();
variables.onSubtraction();
variables.onMultiplying();
variables.onOividing();
variables.onRoot();
variables.onLogharytm();
variables.onReset();