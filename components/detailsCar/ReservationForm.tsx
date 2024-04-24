import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { optionsVilles } from '@/src/constantes/OptionsInputs';

export function ReservationForm() {
  const [departureLocation, setDepartureLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des champs

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 rounded-md border shadow">
      <div className="flex flex-col gap-4">
        <h1 className='text-center font-semibold text-lg mb-2'>Informations de la réservation</h1>

        <div className="flex flex-col gap-1">
          <Label htmlFor="departureLocation">Lieu de départ</Label>
          <select
            id="departureLocation"
            name="departureLocation"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
            className="border rounded-md text-sm p-2 h-10 bg-card"
          >
            {
              optionsVilles.map((ville, index) => (
                <option key={index} value={ville.value}>{ville.label}</option>
              ))
            }

          </select>
        </div>

        <div className='flex w-full justify-between gap-4' >

          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="departureDate">Date de départ</Label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border rounded-md text-sm p-2 h-10 bg-card min-w-[90%]"
            />
          </div>

          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="departureTime">Heure de départ</Label>
            <input
              type="time"
              id="departureTime"
              name="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className="border rounded-md text-sm p-2 h-10 bg-card min-w-[90%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="arrivalLocation">Lieu de retour</Label>
          <select
            id="arrivalLocation"
            name="arrivalLocation"
            value={arrivalLocation}
            onChange={(e) => setArrivalLocation(e.target.value)}
            className="border rounded-md text-sm p-2 h-10 bg-card "
          >
            {
              optionsVilles.map((ville, index) => (
                <option key={index} value={ville.value}>{ville.label}</option>
              ))
            }
          </select>
        </div>

        <div className='flex w-full justify-between gap-4' >
          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="arrivalDate">Date de retour</Label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="border rounded-md text-sm p-2 h-10 bg-card min-w-[90%]"
            />
          </div>
          <div className="flex flex-col gap-1 flex-grow wful">
            <Label htmlFor="arrivalTime">Heure de retour</Label>
            <input
              type="time"
              id="arrivalTime"
              name="arrivalTime"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              className="border rounded-md text-sm p-2 h-10 bg-card min-w-[90%]"
            />
          </div>
        </div>
      </div>
      {/* information user */}

      <div className="flex flex-col gap-4">
        <h1 className='text-center font-semibold text-lg my-2'>Informations du conducteur</h1>

        <div className="flex flex-col gap-1">
          <Label htmlFor="civilite">Civilité</Label>
          <select
            id="civilite"
            name="civilite"
            className="border rounded-md text-sm p-2 h-10 bg-card"
          >
            <option value="">Choisissez</option>
            <option value="Paris">Monsieur</option>
            <option value="Lyon">Madamme</option>
            <option value="Marseille">Null</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="departureDate">Nom du conducteur</Label>
            <input
              type="text"
              id="departureDate"
              name="departureDate"
              placeholder='votre nom'
              className="border rounded-md text-sm p-2 h-10 bg-card"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="departureDate">Prénom du conducteur</Label>
            <input
              type="text"
              id="departureDate"
              name="departureDate"
              placeholder='votre prénom'
              className="border rounded-md text-sm p-2 h-10 bg-card"
            />
          </div>
        </div>

        <div className="grid  gap-4 grid-cols-1 justify-between sm:grid-cols-2">
          <div className="flex flex-col gap-1 sm:flex-grow ">
            <Label htmlFor="age">Date de naissance</Label>
            <input
              type="date"
              id="age"
              name="age"
              placeholder='Date de naissance'
              className="border text-left rounded-md min-w-[93%] text-sm p-2 h-10 bg-card sm:min-w-{40%}"
            />
          </div>
          <div className="flex flex-col gap-1 flex-grow">
            <Label htmlFor="phone">Votre télephone</Label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder='votre numéro de télephone'
              className="border rounded-md text-sm p-2 h-10 bg-card"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-grow">
          <Label htmlFor="email">Votre email</Label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='email'
            className="border rounded-md text-sm p-2 h-10 bg-card"
          />
        </div>
      </div>

      {/* Recapitulatif */}
      <div className="flex flex-col gap-4 mt-2">
        <h2 className='text-center font-semibold text-lg my-2'>Récapitulatif</h2>
        <div className='flex flex-col gap-4'>

          <div className='flex flex-col gap-2'>

            <div className='flex flex-col flex-wrap sm:flex-row justify-between  gap-4'>
              <div className='flex flex-col'>
                <strong className='text-gray-900 dark:text-white'>Lieu de prise </strong>
                <span className='text-sm text-gray-700 dark:text-gray-400'>Kénitra Agence</span>
                <span className='text-sm text-gray-700 dark:text-gray-400'>le 20 mars 2024  à 15H30</span>
              </div>
              <div className='flex flex-col'>
                <strong className='text-gray-900 dark:text-white'>Lieu de retour </strong>
                <span className='text-sm text-gray-700 dark:text-gray-400'>Kénitra Agence</span>
                <span className='text-sm text-gray-700 dark:text-gray-400'>le 30 mars 2024  à 15H30</span>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4'>
              <div className='flex flex-col   '>
                <strong className='text-gray-900 dark:text-white'>Jours </strong>
                <strong className=' text-sm text-gray-700 dark:text-gray-400'>5 jours</strong>
              </div>
              <div className='flex flex-col '>
                <strong className='text-gray-900 dark:text-white'>Prix </strong>
                <strong className=' text-sm text-gray-700 dark:text-gray-400'>5 jours x 320dh = 1600 dh</strong>
              </div>
            </div>

          </div>

        </div>
      </div>


      <button type="submit" className=" p-2 mt-4 rounded-md h-10 bg-primary text-white">
        Valider
      </button>
    </form>
  );
}

