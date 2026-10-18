import styles from "./Signup.module.css";
import logo from "../assets/logo.svg";

export default function Signup() {
    return (
        <main className={styles.signup}>
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            <section className={styles.right}>
                <form
                    className={styles.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <h2>Create Account</h2>

                    <div className={styles.socialButtons}>
                        <button type="button" className={styles.socialButton}>
                            Sign up with Google
                        </button>

                        <button type="button" className={styles.socialButton}>
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>

                    <div className={styles.fields}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            autoComplete="name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            Create Account
                        </button>
                    </div>

                    <p className={styles.loginText}>
                        Already have an account?{" "}
                        <a href="/">Login</a>
                    </p>
                </form>
            </section>
        </main>
    );
}