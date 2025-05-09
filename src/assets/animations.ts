import gsap from "gsap";

class Animations {
    transformFromTop(ref:any, elementClassname:string) {
        gsap.fromTo(elementClassname, 
            { y: '-100%' }, 
            { y: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        });
    }

    transformFromBottom(ref:any, elementClassname:string) {
        gsap.fromTo(elementClassname, 
            { y: '100%' }, 
            { y: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        });
    }

    transofrmToLeft(ref:any, elementClassname:string) {
        gsap.fromTo(elementClassname, 
            { x: '100%' }, 
            { x: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }

    transformToRight(ref:any, elementClassname:string) {
        gsap.fromTo(elementClassname, 
            { x: '-100%' }, 
            { x: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }

    opacity(ref:any, elementClassname:string) {
        gsap.fromTo(`${elementClassname}`, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }
}

export default Animations