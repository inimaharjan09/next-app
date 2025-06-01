
'use server';
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function addData(val) {
  try {

    await axios.post('https://683a849a43bb370a8672ea61.mockapi.io/todos', val);

    //  return { success: true, message: 'Data added successfully' };
  } catch (err) {
    return { error: true, message: err.message };
  }

  revalidatePath('/todo');
  redirect('/todo');
}

export async function editData(val) {
  try {

    await axios.patch(`https://683a849a43bb370a8672ea61.mockapi.io/todos/${val.id}`, val.body);

    revalidatePath('/todo');

    return { error: false, message: 'Data updated successfully' };
  } catch (err) {
    return { error: true, message: err.message };
  }

  
}


export async function removeTodo(id) {
  try {

    await axios.delete(`https://683a849a43bb370a8672ea61.mockapi.io/todos/${id}`);
    revalidatePath('/todo');
    return { error: false, message: 'Todo removed successfully' };
  } catch (err) {
    return { error: true, message: err.message };
  }



}