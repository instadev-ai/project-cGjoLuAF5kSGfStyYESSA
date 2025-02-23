import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from "react";

interface ConfettiProps {
  isActive?: boolean;
}

const Confetti = ({ isActive = false }: ConfettiProps) => {
  const [initialized, setInitialized] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container loaded", container);
    }
  }, []);

  useEffect(() => {
    setInitialized(true);
  }, []);

  if (!initialized || !isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* @ts-ignore */}
      <tsparticles
        id="confetti"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 0,
            },
            color: {
              value: ["#00FFFC", "#FC00FF", "#fffc00"],
            },
            shape: {
              type: ["circle", "square"],
              options: {},
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                minimumValue: 0,
                speed: 2,
                startValue: "max",
                destroy: "min",
              },
            },
            size: {
              value: 4,
              random: {
                enable: true,
                minimumValue: 2,
              },
            },
            links: {
              enable: false,
            },
            life: {
              duration: {
                sync: true,
                value: 5,
              },
              count: 1,
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: 10,
              },
              speed: 30,
              decay: 0.1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                top: "none",
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
          emitters: {
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.4,
            },
            rate: {
              delay: 0.1,
              quantity: 150,
            },
            size: {
              width: 0,
              height: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default Confetti;