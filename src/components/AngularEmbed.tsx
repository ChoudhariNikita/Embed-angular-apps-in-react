import { useEffect, useRef } from 'react';

interface AngularElementProps {
  scriptPath: string;
  rootElementName:string;
}

const AngularElement = ({ scriptPath, rootElementName = 'app-root' }: AngularElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAngularApp = async () => {
      try {
        const response = await fetch(scriptPath);
        let scriptContent = await response.text();

        if (elementRef.current) {
          const rootElement = document.createElement(rootElementName);
          elementRef.current.appendChild(rootElement);
        }

        const script = document.createElement('script');
        script.textContent = scriptContent;
        script.async = true;

        document.body.appendChild(script);

        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          if (elementRef.current) {
            elementRef.current.innerHTML = '';
          }
        };
      } catch (error) {
        console.error('Error loading Angular app:', error);
      }
    };

    loadAngularApp();
  }, [scriptPath, rootElementName]);

  return <div ref={elementRef}></div>;
};

export default AngularElement;
