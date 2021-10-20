import React from 'react';

import { Formik, Form, Field, FieldArray } from 'formik';

const initialValues = {
 projects: [
    {
      client: "Klaus",
      project: "klaus@formik.com",
      time:"hh:mm"
    },
   
  ]
};

// Here is an example of a form with an editable list.

// Next to each input are buttons for insert and remove.

// If the list is empty, there is a button to add an item.

export const FormikArray = () => (

  <div>

    <h1>Friend List</h1>

    <Formik

      initialValues={initialValues}

 
      render={({ values }) => (

        <Form>

          <FieldArray

            name="projects"

            render={arrayHelpers => (

              <div>

                {values.projects && values.projects.length > 0 ? (

                  values.projects.map((project, index) => (

                    <div key={index}>

                      
                      <Field
                            name={`projects.${index}.client`}
                            placeholder="Jane Doe"
                            type="text"
                          />
                             <Field
                            name={`projects.${index}.project`}
                            placeholder="jane@acme.com"
                           
                          />
                            <Field
                      name={`projects.${index}.time`}
                      placeholder="hh:mm"
                    
                   />
                       
                      <button

                        type="button"

                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list

                      >

                        -

                      </button>

                      <button

                        type="button"

                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position

                      >

                        +

                      </button>

                    </div>

                  ))

                ) : (

                  <button type="button" onClick={() => arrayHelpers.push('')}>

                    {/* show this when user has removed all friends from the list */}

                    Add a friend

                  </button>

                )}

                <div>

                  <button type="submit">Submit</button>

                </div>

              </div>

            )}

          />

        </Form>

      )}

    />

  </div>

);




                  
 export default FormikArray;