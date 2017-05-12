package com.dashboard.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder authenticationMgr)
			throws Exception {
		authenticationMgr.inMemoryAuthentication().withUser("admin")
				.password("System@123").authorities("ROLE_USER");
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		// @formatter:off
		web.ignoring().antMatchers("/public/**"); // Allow UI resources.
		// @formatter:on
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
		/* .addFilterAfter(new CSRFTokenGeneratorFilter(), CsrfFilter.class) */
		.authorizeRequests().antMatchers("/").permitAll()
				.antMatchers("/resources/**").permitAll()
				.antMatchers("/index.html").permitAll().antMatchers("/login")
				.permitAll().anyRequest().authenticated().and().formLogin()
				.loginPage("/login").usernameParameter("username")
				.passwordParameter("password").permitAll()
				/* .successForwardUrl("/#!/SalesDashboard") */
				.failureUrl("/login?error").permitAll().and().logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/login");
	}
}
