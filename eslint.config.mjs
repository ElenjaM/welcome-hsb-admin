import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";


export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
	{ files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
	{ ignores: ['dist', 'tailwind.config.js'] },

  	pluginReact.configs.flat.recommended,

  	{ 
		plugins: { jsdoc },
		"rules": {
			"react/react-in-jsx-scope": "off", // React ist nicht mehr erforderlich in JSX
			"react/prop-types": "off", // PropTypes sind nicht erforderlich
			"react/jsx-uses-react": "off", // React ist nicht mehr erforderlich in JSX
			"react/jsx-uses-vars": "error", // Fehler, wenn Variablen in JSX nicht verwendet werden
			// CamelCase-Notation
			'camelcase': ['error', { properties: 'always' }],

			// Einheitliche Einrückung (1 Tab pro Ebene)
			'indent': ['error', 'tab'],

			// Maximale Zeilenanzahl pro Methode
			'max-lines-per-function': ['error', { max: 200, skipComments: true }],

			// Keine GOTO-Anweisungen (JS hat kein GOTO, aber Labels vermeiden)
			'no-labels': 'error',

			// Initialisierung von Variablen
			'init-declarations': ['error', 'always'],

			// Parameterübergabe (max. 5 Parameter)
			'max-params': ['error', 5],

			// Fehler- und Ausnahmebehandlung
			'no-throw-literal': 'error',

			// Modularisierung (max. 300 Zeilen pro Datei)
			'max-lines': ['error', { max: 300, skipComments: true }],

			// Namenskonventionen
			'id-match': [
				'error',
				'^[a-zA-Z][a-zA-Z0-9]*$|^[A-Z_]+$',
				{
					properties: true,
					onlyDeclarations: true,
				},
			],
			// Dokumentation (Kommentare erforderlich)
			'jsdoc/require-jsdoc': 'warn'

  		},
	},
]);
