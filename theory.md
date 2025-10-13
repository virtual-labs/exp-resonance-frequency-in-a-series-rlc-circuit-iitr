### Introduction

<div align="justify" style="font-size:18px;">

A series resonant circuit is an electrical circuit consisting of a resistor (R), inductor (L), and capacitor (C) connected in series. Resonance occurs when the inductive reactance (X<sub>L</sub>) and capacitive reactance (X<sub>C</sub>) are equal in magnitude but opposite in phase, effectively cancelling each other out. As a result, the circuit's impedance becomes purely resistive at a specific frequency known as the resonant frequency (f<sub>r</sub>). At this point, the impedance reaches its lowest value, allowing the current to reach its maximum.</br></br>

<center><img src="images/Series RLC circuit.jpg"width="25%" alt="Series RLC circuit" title="Inductive reactance agianst Frequency"> </center>
 <center>Fig.1 Series RLC circuit</center><br/>

### Resonance Condition

Resonance in a series RLC circuit happens when:
    <center> X<sub>L</sub>=X<sub>C</sub></center><br>

Since the inductive reactance is given by:
      <center> X<sub>L</sub>=&#x3C9;<sub>L</sub></center><br>

and the capacitive reactance is:

<div style="text-align:center">

 $X_C=\frac{1}{\omega C}$ </div>

Setting them equal to each other: 

<div style=text-align:center>

$ \omega_C=\frac{1}{\omega C}$</div>

Solving for the angular frequency($\omega$):

<div style=text-align:center>

$\omega^2  = \frac{1}{LC}$

$\omega=\frac{1}{\sqrt LC}$ </div>

since the angular frequency is related to the resonance frequency($f_r$) by:<br><br>
<div style=text-align:center>

 $ \omega= 2{\pi f_r}$  </div>

 The resonance frequency is given by:

 <div style=text-align:center>

 $ f_r=\frac {1} {2\pi\sqrt LC}$ 

 </div>

### Inductive Reactance against Frequency 

<center><img src="images/img6.gif"width="25%" alt="Inductive reactance agianst Frequency" title="Inductive reactance agianst Frequency"> </center>
<center>Fig.2 Inductive reactance vs Frequency  </center><br/>

The graph of inductive reactance against frequency is a straight-line curve. The inductive reactance of an inductor increases linearly as the frequency across it increases. Therefore, inductive reactance is positive and directly proportional to frequency($X_L \propto f$)<br>

The same principle applies to capacitive reactance but in the opposite manner. If either the frequency or capacitance increases, the overall capacitive reactance decreases. As the frequency approaches infinity, the capacitor's reactance decreases to nearly zero, causing it to behave like a perfect conductor with 0 Ω resistance.<br> 

Conversely, as the frequency approaches zero (DC level), the capacitor's reactance increases rapidly toward infinity, making it behave like a large resistance, similar to an open circuit. This indicates that capacitive reactance is inversely proportional to frequency for any given capacitance value, as illustrated in Fig. 3.<br>

### Capacitive Reactance against Frequency

<center> <img src="images/img7.gif" width="25%" alt="Capacitive Reactance against Frequency" title="Capacitive Reactance against Frequency"> </center>
<center> Fig.3 Capacitive reactance vs Frequency </center> <br/>

The graph of capacitive reactance against frequency is a hyperbolic curve. The Reactance of a capacitor is very high value at low frequencies but decreases rapidly as the frequency increases. Therefore, capacitive reactance is negative and inversely proportional to frequency (XC ∝ ƒ -1).<br>

We can see that the values of reactance depend on the frequency of the supply. At higher frequencies, $X_L$ is high, whereas at lower frequencies, $X_C$ is high. This implies that there must be a specific frequency at which $X_L$ is equal to $X_C$. <br>

If we now overlay the inductive reactance curve on top of the capacitive reactance curve, aligning them on the same axes, the point of intersection represents the series resonance frequency ($f_r or \omega_r$) as shown below.

<center> <img src="images/img8.gif"width="30%" alt="Series Resonance" title="Series Resonance"> </center>
<center> Fig.4 Reactance vs Resonance frequency </center><br/>

<b>Quality Factor (Q) and Bandwidth (Δf)</b>

<b>Quality Factor(Q-Factor)</b>

The Q-factor measures the sharpness of resonance and is defined as:<br>

<div style=text-align:center>

$ Q=\frac {\omega_r L}  {R}= \frac{1}{\omega_r CR}$
</div>

For a series RLC circuit, the Q-factor can also be expressed as:<br>

<div style=text-align:center>

$  Q=\frac {X_L}{R} = \frac {1}{R}\frac {\sqrt L}{C} $
</div>

<b>High Q-factor:</b> Narrow bandwidth,sharp resonance.<br>
<b>Low Q-factor:</b> Wider bandwidth, less sharp resonance.

<b>Bandwidth(Δf)</b><br>

The bandwidth is the range of frequencies over which the circuit effectively responds and is defined as:<br>

<div sttle=text-align:center>

$ Δf = f_L−f_H$ <br>

</div>
Where,<br>
•	$f_L$ = Lower cutoff frequency (where the amplitude drops to 1/root 2 or -3 dB below peak).<br>
•	$f_H$ = Upper cutoff frequency (similarly, where amplitude drops by -3 dB).<br>
•	$f_r$ = Resonant frequency, located at the peak of the curve.<br>

<div style=text-align:center>

$ Δf=\frac {f_r}{Q}$
</div>

A higher Q-factor results in a smaller bandwidth, making the circuit more frequency-selective.

<center> <img src="images/Resonance curve.png"width="30%" alt="Series Resonance" title="Series Resonance"> </center><br>
<center> Fig.5 Resonance Curve </center><br/>

<b>Applications of resonance in RLC circuits</b><br><br>
1.<b>Radio and TV Tuners:</b> Used in tuning circuits to select specific frequencies.<br><br>
2.<b>Filters and Oscillators:</b> Essential in designing band-pass filters and frequency-selective networks.<br><br>
3.<b>Wireless Power Transfer:</b> Resonant circuits improve efficiency in wireless energy transfer applications.

</div>





 