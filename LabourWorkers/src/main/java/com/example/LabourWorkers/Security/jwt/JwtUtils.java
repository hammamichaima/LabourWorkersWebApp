package com.example.LabourWorkers.Security.jwt;

import java.security.Key;
import java.util.Date;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import com.example.LabourWorkers.Security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {

   // private static final String SECRET_KEY = "your-very-secure-secret-key-of-at-least-256-bits"; // Replace with a strong secret
   // private static final long jwtExpirationMs = 86400000; // Example: 1 day expiration

    @Value("${jwt.secret}")  // ✅ Ensure this is defined in application.properties
    private String jwtSecret;

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

   // @Value("${bezkoder.app.jwtSecret}")
   // private String jwtSecret;

  //  @Value("${bezkoder.app.jwtExpirationMs}")
   // private int jwtExpirationMs;

    @Value("${bezkoder.app.jwtCookieName}")
    private String jwtCookie;

    @Value("${jwt.expirationMs}")  // ✅ Define expiration in properties
    private int jwtExpirationMs;


    public String getJwtFromCookies(HttpServletRequest request) {
        Cookie cookie = WebUtils.getCookie(request, jwtCookie);
        if (cookie != null) {
            return cookie.getValue();
        } else {
            return null;
        }
    }

   // public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal) {
    //    String jwt = generateTokenFromEmail(userPrincipal.getUsername());
    //    return ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
   // }

    public ResponseCookie getCleanJwtCookie() {
        return ResponseCookie.from(jwtCookie, null).path("/api").build();
    }


    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getEmailFromJwtToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();  // ✅ Extract email from the token
    }



   // public String getUserNameFromJwtToken(String token) {
    //    return getEmailFromJwtToken(token);  // ✅ Reuse getEmailFromJwtToken()
  //  }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parserBuilder()  // ✅ Use `parserBuilder()`
                    .setSigningKey(getSigningKey())  // ✅ New way to set signing key
                    .build()
                    .parseClaimsJws(authToken); // ✅ Parses JWT correctly

            return true;
        } catch (MalformedJwtException e) {
            logger.error("❌ Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("⏳ JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("🚫 JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("⚠️ JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }




    public String generateTokenFromEmail(String email) {
        return Jwts.builder()
                .setSubject(email)  // ✅ Use email instead of username
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }
}