const shader = `
precision highp float;
uniform float u_time;
uniform vec2 origin;
uniform vec4 foreground;
uniform vec4 background;


varying vec2 v_texcoord;
  
#define NUM_OCTAVES 5

float rand(float n){return fract(sin(n) * 43758.5453123);}

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


void main(void)
{
    vec2 uv = v_texcoord;
    
    vec2 distortion = vec2(
        sin(u_time * 0.1 + uv.x + uv.y),
        cos(u_time * 0.5 + uv.x * 2.0 + uv.y * 0.5)
    );
    
    float d = distance(uv, origin);
    
    float grain = noise(uv) + rand(uv) * 0.2;
    
    float f = d + fbm(uv + origin - (u_time*0.001));
    f *= 20.0;
    f += grain;
    f -= u_time * 0.2;
    f = fract(f);
    
    float mixer = step(0.1, f) + step(0.2, f);

    
    vec4 mixed = mix(foreground, background, mixer);
        
    gl_FragColor = mixed;
}
`;

export default shader;
