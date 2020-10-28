const rotator = document.querySelectorAll(".rotator__case");

    let i = 1
    setInterval(() => {
        if (i >= rotator.length) {
            rotator[i - 1].classList.remove("rotator__case_active");
            i = 0;
        }

        if (i > 0) {
            rotator[i - 1].classList.remove("rotator__case_active");
        }

        rotator[i].classList.add("rotator__case_active");
        i++;
        
    }, 1000);
